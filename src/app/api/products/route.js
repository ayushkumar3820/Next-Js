import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Product } from "../../../lib/model/products";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(
      "mongodb+srv://ayushkumarnbd125:Iw7AYyJyQGaJVizg@cluster0.k916s.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0"
    );
    const data = await Product.find();
  } catch (error) {
    data = { success: false };
  }

  return NextResponse.json({ result: true });
}
