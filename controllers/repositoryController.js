import Repository from "../models/repository"
import Users from "../models/users"


class repositoryController {
    async index(req, res) {
        try {
            const { user_id } = req.params;
            const { q } = req.query;

            const user = await Users.findById(user_id);

            if (!user) {
                return res.status(404).json();
            }

            let query = {}

            if (q) {
                query = { url: { $regex: q } }
            }

            const repositories = await Repository.find({
                userId: user_id,
                ...query
            });

            return res.json(repositories);

        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: "Internal server error" })
        }
    }

    async create(req, res) {
        try {
            const { user_id } = req.params;
            const { name, url } = req.body;

            const user = await Users.findById(user_id);

            if (!user) {
                return res.status(404).json({ message: "User doesn't exist" });
            }

            const repository = await Repository.findOne({ userId: user_id, url })

            if (repository) {
                return res.status(422).json({ message: `Repository ${url} already exists.` })
            }

            const newRepository = await Repository.create({ name, url, userId: user_id });

            return res.status(201).json(newRepository);

        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: "Internal server error" })
        }
    }

    async destroy(req, res) {
        try {
            const { user_id, id } = req.params;

            const user = await Users.findById(user_id)

            if (!user) {
                return res.status(404).json()
            }

            let teste = await Repository.findByIdAndDelete(id)

            res.status(200).json(teste)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: "Internal server error" })
        }
    }

}

export default new repositoryController();