import Image from "next/image"
import MyPic from "../../public/image/selma2.jpg"


const MyProfilePic = () => {
  return (
    <section className="w-full mx-auto">
        <Image
            className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8" 
            src={MyPic}
            width={200}
            height={200}
            alt="apostle joshua selman"
            priority={true} />
    </section>
  )
}

export default MyProfilePic