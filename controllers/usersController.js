import Users from "../models/users"
import {hashSync} from "bcryptjs"

class usersController {
    async index(req, res) {
        try {
            const users = await Users.find()
            return res.json(users)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: "Internal server error" })
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params;

            const user = await Users.findById(id);

            if (!user) {
                return res.status(404).json({ message: "User doesn't exists." });
            }

            return res.json(user);
        } catch (error) {
            console.error(error)
            return res.status(404).json({ message: "User doesn't exists." });
        }
    }

    async create(req, res) {
        try {
            const { email, password } = req.body

            const user = await Users.findOne({ email })

            if (user) {
                return res.status(422).json({ message: `User ${email} already exists` });
            }

            const newUser = await Users.create({ email, password: hashSync(password) });

            return res.status(201).json(newUser)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: `${error.message}` });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { email, password } = req.body

            const user = await Users.findById(id)

            if (!user) {
                return res.status(404).json({ message: "User doesn't exists." });
            }

            await Users.updateOne({ email, password: hashSync(password) })

            res.status(200).json()
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: "Internal server error" })

        }
    }


    async destroy(req, res) {
        try {
            const { id } = req.params

            await Users.findByIdAndDelete(id)

            res.status(200).json()
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: "Internal server error" });
        }
    }

}


export default new usersController();
