"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function start() {
    try {
        const PORT = process.env.PORT || 5000;
        const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
        app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
        await app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    }
    catch (err) {
        console.log(err);
    }
}
start();
//# sourceMappingURL=main.js.map