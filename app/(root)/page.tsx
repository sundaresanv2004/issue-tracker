import Image from "next/image";
import {Button} from '@/components/ui/button'

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
      </main>
  );
}
