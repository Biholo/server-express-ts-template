import express from "express";
import {
    login,
    getUserFromToken,
    refreshToken,
    logout,
    register
} from "@/controllers/authController";
import { validateZod } from "@/middlewares/validateZod";
import { isAuthenticated } from "@/middlewares/auth";
import { verifyAccess } from "@/middlewares/verifyAccess";
import {
    registerSchema,
    loginSchema,
    refreshTokenSchema,
    logoutSchema,
} from "@/validators/authValidator";

const router = express.Router();

// **Inscription d'un utilisateur**
router.post(
    "/register",
    validateZod(registerSchema, "body"),
    register

);

// **Connexion d'un utilisateur**
router.post(
    "/login",
    validateZod(loginSchema, "body"),
    login
);

// **Récupérer l'utilisateur depuis le token**
router.get(
    "/me",
    isAuthenticated,
    getUserFromToken
);

// **Rafraîchir le token d'accès**
router.post(
    "/refresh",
    validateZod(refreshTokenSchema, "body"),
    refreshToken
);

// **Déconnexion d'un utilisateur**
router.post(
    "/logout",
    validateZod(logoutSchema, "body"),
    logout
);

export default router;