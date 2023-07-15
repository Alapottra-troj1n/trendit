import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { postValidator } from "@/lib/validators/posts";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new Response("Unauthorized access", { status: 401 });
    }
    const payload = await req.json();

    const { subredditId, title, content } = postValidator.parse(payload);

    const subExists = await db.subscription.findFirst({
      where: {
        subredditId,
        userId: session.user.id,
      },
    });

    if (!subExists) {
      return new Response("You need to subscribe to post in the community", {
        status: 400,
      });
    }

    await db.post.create({
        data: {
            title,
            content,
            authorId: session.user.id,
            subredditId
        }
    })



    return new Response('OK');


  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }
    return new Response("Could not create your post. Server Error", { status: 500 });
  }
}
