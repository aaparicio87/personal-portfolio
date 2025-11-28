import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useLanguage } from '../context/LanguageContext';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { t } = useLanguage();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Logic to send email will go here
    console.log(data);
    alert('Email logic implementation point');
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          {t('contact.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('contact.subtitle')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t('contact.description')}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <FiMail className="w-5 h-5 text-gray-900 dark:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t('contact.email')}</p>
                  <a
                    href="mailto:rlaparicio87@gmail.com"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    rlaparicio87@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <FiPhone className="w-5 h-5 text-gray-900 dark:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t('contact.phone')}</p>
                  <a
                    href="tel:+34607186697"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    +34 607 18 66 97
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <FiMapPin className="w-5 h-5 text-gray-900 dark:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t('contact.location')}</p>
                  <p className="text-gray-900 dark:text-white">Albacete, Spain</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                >
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: true })}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-colors`}
                />
                {errors.name && <span className="text-red-500 text-sm mt-1">{t('contact.validation.required')}</span>}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                >
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-colors`}
                />
                {errors.email?.type === 'required' && <span className="text-red-500 text-sm mt-1">{t('contact.validation.required')}</span>}
                {errors.email?.type === 'pattern' && <span className="text-red-500 text-sm mt-1">{t('contact.validation.email')}</span>}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                >
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: true })}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-colors resize-none`}
                />
                {errors.message && <span className="text-red-500 text-sm mt-1">{t('contact.validation.required')}</span>}
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
              >
                {t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
