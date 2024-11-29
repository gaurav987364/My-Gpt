import { adminDB } from "@/lib/firebaseAdmin";
import { xai } from "@/lib/xai";
import { Message } from "@/types";
import {firestore} from 'firebase-admin';
import { NextResponse } from "next/server";

export async function POST(request: Request){
    const {input,chatId,user} = await request.json();

    const res = await xai.chat.completions.create({
        model:"gpt-3.5-turbo",
        messages:[
            {
                role: "system",
                content: "You are a helpful assistant.",
            },
            {
                role: "user",
                content: input,
            }
        ]
    });

    const response = res.choices[0].message.content;

    const message:Message = {
        text:response || "Oops!, Unable to find your query.",
        createdAt: firestore.Timestamp.now(),
        user:{
            _id:"my-gpt",
            name:"My-Gpt",
            avatar:"/images/my-gpt-logo-removebg-preview.png"
        }
    };

    await adminDB
    .collection("users")
    .doc(user.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);


    console.log(message.text)
    return NextResponse.json({answer: message.text}, {status:200});
}