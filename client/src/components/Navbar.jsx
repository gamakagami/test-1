 export default function Navbar() {
   return (
     <nav>
       <h3>Demo Navbar</h3>
+      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
     </nav>
   );
 }
