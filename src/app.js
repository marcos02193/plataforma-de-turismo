import express from "express"
import useplaces from "../src/routes/routerplace.js";
import useRoutes from "../src/routes/useRouter.js"
const app = express()
app.use(express.json())
app.use('/users', useRoutes)
app.use('/places', useplaces)




export default app