import { Router } from "express";
import { joinWorkspaceController } from "../controller/member.controller";

const memberRoutes = Router();

memberRoutes.post("/workspace/:inviteCode/join", joinWorkspaceController);

export default memberRoutes;
