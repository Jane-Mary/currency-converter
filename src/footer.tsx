import { FC } from "react";

export const Footer:FC = () => {
  const firstMenu = [
    "/div.sc-2d1ce559-1.png" ,
    "/div.sc-bacd06c8-1.png",
    "/div.sc-bacd06c8-1 (1).png"
  ]

  const footer = [
    "/Link.png" ,
    "/Link (2).png" ,
    "/Link (1).png" 
  ]

    return (
        <section className="section2">
        <div className="boxes">
          <h3>Recommended by over 400,000 verified customers</h3>
          <div className="images">
            {firstMenu?.map((src, i)=>(
              <img key={i} src={src}  />
            ))}
          </div>
        </div>
        <div className="last">
          <div className="images">
            {footer?.map((src,i)=>(
              <img key={i} src={src}/>
            ))}
         
          </div>
        </div>
      </section>
    )
}

export default Footer;