import dbConnect from "@/app/utils/DbConnect";
import Contact from "@/app/models/contact";
import {NextResponse} from "next/server";



export async function POST(req ,res ) {
    try {
        const body = await req.json() ;
        await dbConnect() ;

        await Contact.create(body);

        return NextResponse.json({
            message:"message sent successfully"
        },
        {
            status:200
        }
        
        )
        
    } catch (error) {
        return NextResponse.json({
            message:"server error , please try again"
        },
        {
            status:500
        }
        )
    }
}