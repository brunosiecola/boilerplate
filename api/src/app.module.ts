import { Module } from '@nestjs/common';

// modules
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';

// services
import { ConfigService } from '@nestjs/config';

// others
import { configuration } from 'config/configuration';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { join } from 'path';

@Module({
  imports: [
    // modules
    ConfigModule.forRoot({
      load: [configuration]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => (configService.get<TypeOrmModuleOptions>('database')),
      inject: [ConfigService]
    }),
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: `smtps://${process.env.APP_SMTP_USERNAME}:${process.env.APP_SMTP_PASSWORD}@${process.env.APP_SMTP_HOST}`,
        template: {
          dir: join(process.cwd(), 'src', 'utils', 'templates'),
          adapter: new EjsAdapter(),
          options: {
            strict: true
          }
        }
      })
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
