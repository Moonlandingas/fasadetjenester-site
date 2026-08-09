export default function NotFound(){
  return (<>
    <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600&family=Inter+Tight:wght@400;600&display=swap" rel="stylesheet"/>
    <style dangerouslySetInnerHTML={{__html: `body{margin:0;background:#0E1826;color:#fff;font-family:"Inter Tight",sans-serif;min-height:100vh;display:grid;place-items:center;text-align:center;padding:26px}
h1{font-family:"Bricolage Grotesque",sans-serif;font-size:clamp(40px,7vw,72px);letter-spacing:-.025em;margin:0 0 12px}
p{color:rgba(255,255,255,.75);margin:0 0 30px}
a{display:inline-flex;font-weight:600;padding:14px 28px;border-radius:100px;background:#D8EC3C;color:#161D06;text-decoration:none}`}}/>
    <div dangerouslySetInnerHTML={{__html: `<div><p style="color:#D8EC3C;font-weight:600;letter-spacing:.18em;font-size:12px">404</p>
<h1>Her var det ingenting.</h1><p>Siden finnes ikke — men bygget ditt trenger sikkert noe likevel.</p>
<a href="/">Til forsiden</a></div>`}}/>
  </>)
}
