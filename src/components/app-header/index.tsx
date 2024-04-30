import { memo } from 'react'
import type { FC, ReactNode } from 'react'
// import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  return (
    <div className="h-[75px] bg-[#242424] text-sm text-[#fff]">
      <div className="flex justify-between w-[1100px] mx-auto">
        content
        <div className=" flex">
          left
          <a
            href="/#"
            className=" block w-[176px] h-[70px] bg-left-top indent-[9999]"
          >
            <img src="/src/assets/img/sprite_01.png" alt="" />
          </a>
        </div>
        <div>right</div>
      </div>
    </div>
  )
}

export default memo(AppHeader)
