"use server";

import { formSchema } from "@/components/Twitterform";
import { prisma } from "@/lib/db";
import { z } from "zod";

export const Tweethere = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    
    const twitter = await prisma.tweetPost.create({
        data: {
            tweet: values.tweet,

        }
        
    })
    console.log(twitter)

    // const twitter = await prisma.TweetPost.create({
    //     data: {
    //         tweet: values.tweet,
    //     }

    // })

    // console.log(Tweethere)
}

