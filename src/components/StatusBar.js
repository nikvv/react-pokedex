import React from 'react'

export default function StatusBar({status}) {
      console.log(status);
      const {base_stat} = status
      const {name} = status.stat

      let percentage = (base_stat/150) *100
      if(percentage > 100) percentage = 100
      const colorStyle = percentage <= 33 ? 'bg-red-300' : percentage <= 58 ? 'bg-yellow-300' : percentage >= 59 ? 'bg-green-300' : '';
      return (
      <div className="w-full text-right mt-2">
            <span className="w-full text-right text-lg text-gray-600  font-mono capitalize">{name} <span className="font-bold text-gray-800">{base_stat}</span> </span>
            <div className="w-full bg-gray-400 rounded">
                  <div className="w-full ml-auto position-relative">
                        <div className={`h-full py-1 ${colorStyle} text-sm text-center font-bold text-gray-900 rounded`} style={{width:`${percentage}%`}}></div>
                  </div>
            </div>

      </div>
      )
}
