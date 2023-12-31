import React from "react";

//"id": 1,
//"company": "Photosnap",
//"logo": "./images/photosnap.svg",
//"new": true,
//"featured": true,
//"position": "Senior Frontend Developer",
//"role": "Frontend",
//"level": "Senior",
//"postedAt": "1d ago",
//"contract": "Full Time",
//"location": "USA Only",
//"languages": ["HTML", "CSS", "JavaScript"],
// "tools": []
//prettier-ignore
const Cards = ({
    job:{
        company,
        logo,
        new: isNew,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools,
    },
    handleTagClick
}) => {//(props)
    let tags = [role,level];
    if(languages){
        tags.push(...languages);
    }
    if(tools){
        tags.push(...tools);
    }
    return(
    <div className={`flex flex-col font-display bg-white shadow-md my-16 mx-10 p-8  ${featured && 'border-l-4 border-teal-500 border-solid'} lg:flex-row`}>
      <div>
          <img className='w-20 h-20 -mt-16 mb-4 lg:my-0 lg:w-24 lg:h-24' src={logo} alt={company}></img>
      </div>
      <div className = 'flex flex-col justify-between ml-4'>
          <h3 className="font-bold text-teal-500 ">
            {company}{isNew?<span className='text-teal-100 bg-teal-500 rounded-full m-1 px-2 py-1 text-sm'>NEW!</span>:''}
            {featured?<span className='text-white bg-black rounded-full px-2 py-1 mx-1 uppercase text-sm '>FEATURED</span>:''}
            </h3>
          <h2 className="text-black font-bold text-xl">{position}</h2>
          <p className='text-gray-500'>{postedAt} · {contract} · {location}</p>
      </div>
      <div className="flex flex-wrap items-center border-t border-gray-200 mt-4 pt-4 lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0">
        {tags?tags.map(tag=><span className=" text-teal-500 bg-teal-50 font-bold hover:bg-teal-500 hover:text-white  m-2 p-2 rounded cursor-pointer"
        onClick={()=>handleTagClick(tag)}>{tag}</span>):('')}</div>
    </div>)
};

export default Cards;

{/* <h1 className={clsx(
    'fdfdfd ddgdg', 
    feature && '', 
    'hdhdhhshsh'
    )}>

</h1> */}