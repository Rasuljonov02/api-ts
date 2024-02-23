import express from "express";
import { Auth } from "../models/auth/auth";

const router = express.Router();

router.put("/update/:id", async (req, res) => {
    try {
        const userId = req.params.id; // id ni olish
        const user = await Auth.findOneAndUpdate({ _id: userId }, req.body, { new: true }); // id boyicha foydalanuvchini izlash va yangilab olish
        if (!user) return res.status(400).send({ data: null, message: "Invalid username or id" });
    
        res.send({ data: user, message: null });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).send({ data: null, message: "Internal Server Error" });
    }
});

export default router;
