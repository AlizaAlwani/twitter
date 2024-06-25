"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
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
import { Tweethere } from '@/actions/tweet'
import Link from 'next/link'

export const formSchema = z.object({
    tweet: z.string().min(2, {
      message: "Text must be at least 2 characters.",
    }),
  })

export const Twitterform = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          tweet: "",
        },
      })
  
      function onSubmit(values: z.infer<typeof formSchema>) {
       
        console.log(values)
        Tweethere(values)
      }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="tweet"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Type your tweet here" {...field} />
                
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className='flex items-center justify-center'>
        <Button type="submit" className='bg-slate-800 text-white font-semibold'>Submit</Button></div>
      </form>
      <div className='text-right'>
        <Link href={'/Deletepage'}>
        🗑️
        </Link>
    </div>
    </Form>
    
  )
}
