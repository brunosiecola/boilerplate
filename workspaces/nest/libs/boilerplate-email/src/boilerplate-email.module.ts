import { Module } from '@nestjs/common';

// modules
import { MailerModule } from '@nestjs-modules/mailer';

// services
import { BoilerplateEmailService } from './boilerplate-email.service';

// others
import { join } from 'path';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: `smtps://${process.env.APP_SMTP_USERNAME}:${process.env.APP_SMTP_PASSWORD}@${process.env.APP_SMTP_HOST}`,
        template: {
          dir: join(process.cwd(), 'libs', 'boilerplate-email', 'src', 'templates'),
          adapter: new EjsAdapter(),
          options: {
            strict: true
          }
        }
      })
    })
  ],
  providers: [
    // services
    BoilerplateEmailService
  ],
  exports: [
    // services
    BoilerplateEmailService
  ]
})
export class BoilerplateEmailModule {}
