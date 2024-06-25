import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
interface FormwrapperProps {
  children: React.ReactNode;
  title: String;
 
}

export const Formwrapper = ({children, title}: FormwrapperProps) => {
  return (
    <Card className='w-[600px] border border-black/40 shadow-md'>
  <CardHeader className='flex items-center justify-center'>
    <CardTitle>{title}</CardTitle>
    
  </CardHeader>
  <CardContent>
    {children}
  </CardContent>
 
</Card>
  )
}
