import home from "./routes/home"
import article from "./routes/article"
import user from "./routes/user"

export default app => {
    app.use("/", home)
    app.use("/article", article)
    app.use("/", user)
}