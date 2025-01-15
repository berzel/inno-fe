import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home/home.tsx"),
    route("/login", "routes/login/login.tsx"),
    route("/register", "routes/register/register.tsx"),
    route("/profile", "routes/profile/profile.tsx"),
] satisfies RouteConfig;
