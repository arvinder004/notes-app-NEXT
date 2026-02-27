import { connectDB } from "../../../../lib/mongodb";
import Note from "../../../../models/Note";

export async function PUT(req, {params}){
    await connectDB()
    const body = await req.json()
    const updated = await Note.findByIdAndUpdate(
        params.id,
        body,
        {new: true}
    )
    return Response.json(updated);
}

export async function DELETE(req, {params}) {
    await connectDB()
    await Note.findByIdAndDelete(params.id)
    return Response.json({message: "Deleted"})
}