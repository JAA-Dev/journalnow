<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request){
        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|same:confirmPassword',
        ]);
        // if fails in input or missing area it send error message
        if($validator->fails()){
            return response()->json(['errors' => $validator->errors()->all()]);
        }
        //create user or store in the database
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password), //create a hash password
        ]);

        $input['name'] = $user->name;
        $input['email'] = $user->email;
        $input['token'] = $user->createToken('app')->plainTextToken;


        return response()->json($input);
        // return response()->json(["test"]);
    }

    public function login(Request $request){
        if(!Auth::attempt($request->only('email', 'password'))){
            return response()->json(['errors' => ['Invalid Credentials']]);
        }

        $user = Auth::user();

        //creating token once you login
        $input['name'] = $user->name;
        $input['email'] = $user->email;
        $input['token'] = $user->createToken('app')->plainTextToken;

        return response()->json($input);

        // return response()->json(['success' => ['Successfully Login']]);
    }

    public function profile(Request $request){
        $validator = Validator::make($request->all(),[
            'name' => 'required',
            'email' => 'required|email',
        ]);
        // if fails in input or missing area it send error message
        if($validator->fails()){
            return response()->json(['errors' => $validator->errors()->all()]);
        }
        //create request to update email and name
        $user = Auth::user();
        $user->name = $request->name;
        $user->email = $request->email;
        //if change password 
        if($request->password){
            $user->password = Hash::make($request->password);
        }
        //store new update
        $user->save();

        
        $input['name'] = $user->name;
        $input['email'] = $user->email;

        return response()->json($input);
    }
}
