import {react} from 'react'

function Card ({ label, used=0, total=0, unit = '' }) {
  const percentage = Math.min((used / total) * 100, 100);

  const getColor= () => {
    if (percentage >= 90) return 'bg-red-500';
    if (percentage >= 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <>
  <div>
      <div className='w-75 h-75 mt-20 ml-10 pl-10 pt-10 bg-white border rounded-lg'><div className='text-[30px] mb-20'>
      <h1>Food & Dinning </h1>
    </div>
        <div className="flex text-black">
          <span>{label}</span>
          <span>
            {unit}{used.toLocaleString()} / {unit}{total.toLocaleString()} ({percentage.toFixed(0)}%)
          </span>
        </div>

        <div className=" h-5 bg-gray-200 mb-10 mr-9 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className={`h-full ${getColor()} transition-all duration-500 ease-out rounded-full`}
            style={{ width: `${percentage}%` }} />
        </div>
      </div>
      </div></>
  );
}

export default Card