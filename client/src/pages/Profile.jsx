 export default function Profile() {
   const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);

   useEffect(() => {
  getUser('123').then(data => {
      setUser(data);
+     setLoading(false);
+   });
   }, []);

if (loading) return <div>Loading user...</div>;
 return <div>{user.name}</div>;
 }
