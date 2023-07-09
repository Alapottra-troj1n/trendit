import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { FaCrown } from "react-icons/fa";
import SubscribeLeaveToggle from "@/components/SubscribeLeaveToggle";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
interface Props {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}

const Layout = async ({ children, params }: Props) => {
  const session = await getAuthSession();

  const subreddit = await db.subreddit.findFirst({
    where: { name: params.slug },
    include: {
      posts: {
        include: {
          author: true,
          votes: true,
        },
      },
    },
  });

  const subscription = !session?.user
    ? undefined
    : await db.subscription.findFirst({
        where: {
          subreddit: {
            name: params.slug,
          },
          user: {
            id: session.user.id,
          },
        },
      });

  const isSubscribed = !!subscription;

  if (!subreddit) return notFound();

  const memberCount = db.subscription.count({
    where: {
      subreddit: {
        name: params.slug,
      },
    },
  });

  return (
    <div className="sm:container max-w-7xl mx-auto h-full pt-12">
      <div>
        {/* Button to take us back */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-4 py-6">
          <div className="flex flex-col col-span-2 space-y-6">{children}</div>

          {/* Info Sidebar */}
          <div className="hidden md:block overflow-hidden h-fit rounded-lg border border-gray-600 order-first md:order-last">
            <div className="px-6 py-4">
              <p className="font-semibold py-3">About r/ {subreddit.name}</p>
            </div>

            <dl className="divide-y divide-slate-200 px-6 py-4 text-sm leading-6 bg-slate-700">
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-slate-200">Created</dt>
                <dt className="text-white">
                  <time dateTime={subreddit.createdAt.toDateString()}></time>
                  {format(subreddit.createdAt, "MMMM d, yyyy")}
                </dt>
              </div>
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-slate-200">Members</dt>
                <dt className="text-white">{memberCount}</dt>
              </div>

              {subreddit.creatorId === session?.user.id ? (
                <div className="flex justify-between gap-x-4 py-3 items-center">
                  <p className="text-slate-300">You are the community owner</p>{" "}
                  <FaCrown className="text-yellow-500 text-xl" />
                </div>
              ) : null}

              {
                subreddit.creatorId !== session?.user.id ? (
                  <SubscribeLeaveToggle subredditName={subreddit.name} isSubscribed={isSubscribed} subredditId={subreddit.id} />
                ) : null
              }
              <Link className={buttonVariants({
                className: 'w-full mb-6'
              })} href={`r/${params.slug}/submit`}>Create Post</Link>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
