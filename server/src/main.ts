import { NestFactory } from '@nestjs/core';
import {AppModule} from "./app.module";
import {ValidationPipe} from "@nestjs/common";

async function start() {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule, {cors: true});

    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    // app.enableCors({credentials: true, origin: true});
    await app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (err) {
    console.log(err)
  }
}

start();
