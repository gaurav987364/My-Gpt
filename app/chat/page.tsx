import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cards } from "@/lib/utils"
import Image from "next/image"

const page = () => {
  return (
   <main className=" flex-1">
     <section className=" w-full flex flex-col justify-center items-center py-6 md:py-12 lg:py-16 xl:py-24">
      <div className=" container px-4 md:px-6">
        <div className=" flex flex-col items-center space-y-2 text-center">
          <div className=" space-y-2">
             <h1 className=" text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
             Welcome to My-Gpt.
             </h1>
              <p className=" mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
                My-Gpt is a powerful AI language model designed to help users generate creative content. Whether you are writing a story, creating a poem, or brainstorming ideas, My-Gpt can provide you with unique and engaging outputs.
              </p>
          </div>
          <div className=" w-full max-w-sm space-y-2">
            <div className=" relative w-full h-40 mt-3 border rounded-lg">
              <Image 
                src={"/images/my-gpt-logo-removebg-preview.png"} 
                alt="My-Gpt-logo" 
                layout="fill" 
                className=" object-contain aspect-square dark:invert rounded-lg"
              />
              <div className=" absolute bottom-0 right-0 left-0 bg-black/90 text-white p-2 rounded-b-lg font-semibold capitalize">
                Powered by
              </div>
            </div>
          </div>
        </div>
      </div>
     </section>


     <section className=" w-full flex items-center justify-center">
      <div className=" container px-4 md:px-6">
        <div className=" grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card)=>(
            <Card key={card.id}>
              <CardHeader>
                <CardTitle className=" cursor-pointer flex items-center space-x-2">
                  <card.icon className=" size-6" color="purple"/>
                  <span className="">{card.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className=" text-gray-500 dark:text-gray-400">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
     </section>
   </main>
  )
}

export default page