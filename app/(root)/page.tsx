import Image from "next/image";
import {Button} from '@/components/ui/button'
import Link from "next/link";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {MessageSquare} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {Avatar} from "@/components/ui/avatar";

export default function Home() {
  return (
      <main className="flex flex-col py-2 m-6">
          <div className="flex flex-row justify-between items-center">
              <div>
                  <h1 className="text-3xl font-bold">Issue Tracker</h1>
                  <p className="text-muted-foreground">Track and manage your project issues</p>
              </div>
              <Button>Create Issue</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 py-5">
              <Link href={`/issues/#`} className="block transition-all hover:scale-[1.02]">
                      <Card>
                          <CardHeader className="pb-2">
                              <div className="flex justify-between items-start">
                                  <CardTitle className="text-lg font-semibold line-clamp-1">Login Page</CardTitle>
                                  <Badge variant='outline'>Low</Badge>
                              </div>
                          </CardHeader>
                          <CardContent>
                              <p className="text-muted-foreground line-clamp-2 mb-4">
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                  when an unknown printer took a galley of type and scrambled it to make a type
                                  specimen book. It has survived not only five centuries, but also the leap into
                                  electronic typesetting, remaining essentially unchanged. It was popularised in the
                                  1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                  recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                              </p>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Badge variant="outline">Open</Badge>
                                  <Badge variant="outline">Bug</Badge>
                              </div>
                          </CardContent>
                          <CardFooter className="flex justify-between border-t pt-4">
                              <div className="flex items-center gap-2">
                                  <span className="text-sm text-muted-foreground">Unassigned</span>
                              </div>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                  <MessageSquare className="h-4 w-4" />
                                  <span>2</span>
                              </div>
                          </CardFooter>
                      </Card>
                  </Link>
          </div>
      </main>
  );
}

