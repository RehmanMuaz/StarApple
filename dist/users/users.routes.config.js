"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UserRoutes');
    }
    configureRoutes() {
        this.app.route('/users')
            .get((req, res) => {
            res.status(200).send('List of users');
        })
            .post((req, res) => {
            res.status(200).send('Post to users');
        });
        this.app.route('/users/:userId')
            .all((req, res, next) => {
            // Middleware function
            next();
        })
            .get((req, res) => {
            res.status(200).send(`GET requested for id ${req.params.userId}`);
        })
            .put((req, res) => {
            res.status(200).send(`PUT requested for id ${req.params.userId}`);
        })
            .patch((req, res) => {
            res.status(200).send(`PATCH requested for id ${req.params.userId}`);
        })
            .delete((req, res) => {
            res.status(200).send(`DELETE requested for id ${req.params.userId}`);
        });
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3VzZXJzL3VzZXJzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUVBQW1FO0FBR25FLE1BQWEsV0FBWSxTQUFRLHlDQUFrQjtJQUMvQyxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDbkIsR0FBRyxDQUFDLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDakQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDekMsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDbEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDekMsQ0FBQyxDQUFDLENBQUE7UUFFTixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzthQUMzQixHQUFHLENBQUMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEIsRUFBRSxFQUFFO1lBQzdFLHNCQUFzQjtZQUN0QixJQUFJLEVBQUUsQ0FBQTtRQUNWLENBQUMsQ0FBQzthQUNELEdBQUcsQ0FBQyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQ2pELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDckUsQ0FBQyxDQUFDO2FBQ0QsR0FBRyxDQUFDLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDakQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQTtRQUNyRSxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUNuRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQywwQkFBMEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1FBQ3ZFLENBQUMsQ0FBQzthQUNELE1BQU0sQ0FBQyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQ3BELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLDJCQUEyQixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDeEUsQ0FBQyxDQUFDLENBQUE7UUFFTixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDbkIsQ0FBQztDQUNKO0FBbENELGtDQWtDQyJ9