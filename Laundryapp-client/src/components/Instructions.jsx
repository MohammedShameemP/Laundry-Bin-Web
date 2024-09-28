import React from 'react'
import "./Instructions.css"
const Instructions = () => {
  return (
    <div className='instructionmain'>
        <div className='instructionhead'>
            <div className='ileftarrow'><img src="./arrow-left.svg" alt="" /></div>
            <div className='instructionh1'><h1>Instructions</h1></div>
            </div>
            <div className='water'>
                <div><h2>Water</h2></div>
                <div className='hot'>
                    <div className='hotimgtext'><img src="./sun.svg" alt="" /><h2>Hot</h2></div>
                </div>
                <div className='cold'>
                  <div className='coldimgtext'>
                  <img className='sun' src="./sun.png" alt="" /><h2>Cold</h2>
                  </div>

                </div>

            </div>
            <div className='water'>
                <div><h2>FabricSoftener</h2></div>
                <div className='hot'>
                    <div className='hotimgtext'><img src="./sun.svg" alt="" /><h2>Scented</h2></div>
                </div>
                <div className='cold'>
                  <div className='coldimgtext'>
                  <img className='sun' src="./sun.png" alt="" /><h2>Normel</h2>
                  </div>

                </div>

            </div>
            
            <div className='water'>
                <div><h2>Detergent</h2></div>
                <div className='hot'>
                    <div className='hotimgtext'><img src="./sun.svg" alt="" /><h2>Scented</h2></div>
                </div>
                <div className='cold'>
                  <div className='coldimgtext'>
                  <img className='sun' src="./sun.png" alt="" /><h2>Normel</h2>
                  </div>

                </div>

            </div>


        


    </div>
  )
}

export default Instructions