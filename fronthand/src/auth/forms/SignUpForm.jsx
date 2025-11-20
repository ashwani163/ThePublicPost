import React, { useState } from 'react'
import { Link, Links, useNavigate } from 'react-router-dom'

import { email, z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form" 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import GoogleAuth from "@/components/shared/GoogleAuth"
const baseURL = import.meta.env.VITE_API_URL || "";

const formSchema = z.object({
  username: z.string().min(6, {message : "username must have atleast 6 character"}).max(50),
  email: z.string().email({message:"invalid email address"})
  .min(6, {message : "Invalid email"}),
  password: z.string().min(8, {message : "password must be atleast 8 character "}),
})


const signUpForm = () => {
 
  const navigate = useNavigate()
  const [loading , setLoading] = useState(false)
  const [errorMessage , setErrorMessage] = useState(null)
   const form = useForm({
     resolver: zodResolver(formSchema),
      defaultValues: {
         username: "",
         email: "",
         password: "", 
        },
  }) 
  async function onSubmit(values){
    try {
      setLoading(true)
      setErrorMessage(null)

      const res = await fetch( `${baseURL}/api/auth/signup`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include", // ✅ add this
        body: JSON.stringify(values),
      
    
          })
      const data = await res.json()
      if(data.success === false){
        setLoading(false)
        toast({ title: "Sign in failed! Please try again." })
        return setErrorMessage(data.message)
      }
      setLoading(false)
      if(res.ok){
        toast({ title: "Sign in sucessfull!" })
        navigate("/sign-in")

      }
    } catch (error) {
      setErrorMessage(error.message)
      toast({ title: "Something went wrong" })
      setLoading(false)
      
    }
  }

  return (
    <div className = " min-h-screen mt-20">
      <div className = "flex p-3 max-w-3xl sm:max-w-5xl mx-auto flex-col mid:flex-row mid:items-center gap-5">
        {/*left*/}
        <div className = "flex-1">
          <Link 
            to={"/"}
            className="font-bold text-2xl sm:text-4xl flex flex-wrap">
              <span className="text-slate-500">The</span>
              <span className="text-slate-700">Public</span>
              <span className="text-slate-900">Post</span>
            </Link>
            <h2 className="text-[24px] md:text-[30px] font-bold leading-[140%] tracking-tight pt-5 sm:pt-12">
              Create a new account
            </h2>
            <p className=" text-slate-500 text-[14px] font-medium leading-[140%] md-text-[16px] md:font-normal mt-2">
              Welcome to The PublicPost, Please provide your details
            </p>
        </div>
        {/*right*/}
        <div className="flex-1">
           <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input type = "text" placeholder="Username" {...field} />
                    </FormControl>
                   
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type = "email" placeholder="Email@gmail.com" {...field} />
                    </FormControl>
                   
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type = "password" placeholder="password" {...field} />
                    </FormControl>
                   
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
               type="submit"
                className="bg-blue-700"
                disabled={loading}
                >
                  {loading ? (
                    <span className="animate-pulse">Loading...</span>
                  ) : (
                    <span>Sign Up</span>
                  )}
                  </Button>
                  <GoogleAuth/>
            </form>
         </Form>

         <div className="flex gap-2 text-sm mt-5">
          <span>Have an account?</span>
          <Link to="/sign-in" className="text-blue-700">SignIn</Link>
         </div>

         {errorMessage && <p className="mt-5 text-red-600">{errorMessage}</p>}
        </div>

      </div>
      
    </div>
  )
}

export default signUpForm
