import Image from "next/image";

export default function Home() {
  return (
    <body class="bg-red-500">
      <div className="bg-white p-20 rounded-lg mb-8">
        <h1 className="text-black">ola</h1>
      </div>

      <div className="bg-red-500 p-20 mb-8 items-center justify-center flex rounded-lg">
        <div className="bg-green-300 w-90 h-80 flex m-10 border-2 rounded-lg">
              <div className="bg-gray-500 w-90 h-50 flex m-0 border-0 rounded-lg">
                <Image
                src="/maquen.png"
                alt="maquen"
                width={600}
                height={50}
                className="rounded"
                />
            </div>
        </div>

        <div className="bg-blue-500 w-90 h-80 flex m-10 border-2 rounded-lg">
              <div className="bg-gray-500 w-90 h-50 flex m-0 border-0 rounded-lg">
                <Image
                src="/maquen.png"
                alt="maquen"
                width={600}
                height={50}
                className="rounded"
                />
            </div>
        </div>

        <div className="bg-gray-300 w-90 h-80 flex m-10 border-2 rounded-lg">
              <div className="bg-gray-500 w-90 h-50 flex m-0 border-0 rounded-lg">
                <Image
                src="/maquen.png"
                alt="maquen"
                width={600}
                height={50}
                className="rounded"
                />
            </div>
        </div>

        <div className="bg-gray-700 w-90 h-80 flex m-10 border-2 rounded-lg">
              <div className="bg-gray-500 w-90 h-50 flex m-0 border-0 rounded-lg">
                <Image
                src="/maquen.png"
                alt="maquen"
                width={600}
                height={50}
                className="rounded"
                />
            </div>
        </div>

      </div>

      <div className="bg-pink-300 p-20 mb-8 items-center justify-center flex rounded-lg">
          <div className="bg-green-300 w-90 h-80 flex m-10 border-2 rounded-lg">
            <div className="bg-gray-500 w-90 h-50 flex m-0 border-0 rounded-lg">
              <Image
                src="/maquen.png"
                alt="maquen"
                width={600}
                height={50}
                className="rounded"
                />
            </div>
          </div>
          
        <div className="bg-blue-500 w-90 h-80 flex m-10 border-2 rounded-lg">
          <div className="bg-gray-500 w-90 h-50 flex m-0 border-0 rounded-lg">
            <Image
                src="/maquen.png"
                alt="maquen"
                width={600}
                height={50}
                className="rounded"
                />
            </div>
        </div>

        <div className="bg-gray-300 w-90 h-80 flex m-10 border-2 rounded-lg">
          <div className="bg-gray-500 w-90 h-50 flex m-0 border-0 rounded-lg">
            <Image
                src="/maquen.png"
                alt="maquen"
                width={600}
                height={50}
                className="rounded"
                />
            </div>
        </div>

        <div className="bg-gray-700 w-90 h-80 flex m-10 border-2 rounded-lg">
          <div className="bg-gray-500 w-90 h-50 flex m-0 border-0 rounded-lg">
            <Image
                src="/maquen.png"
                alt="maquen"
                width={600}
                height={50}
                className="rounded"
                />
            </div>
        </div>
      </div>
    </body>
  );
}
