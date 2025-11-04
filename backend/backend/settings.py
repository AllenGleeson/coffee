import os
import environ

# Initialise environment variables
env = environ.Env()
environ.Env.read_env()  # This should load your .env file

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Take environment variables from .env file
environ.Env.read_env(os.path.join(BASE_DIR, '.env'))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env('DJANGO_DEBUG')

ALLOWED_HOSTS = env.list('ALLOWED_HOSTS', default=[])

# Application definition

INSTALLED_APPS = [
    # Admin and auth removed - frontend-focused showcase
    # 'django.contrib.admin',
    # 'django.contrib.auth',
    'django.contrib.contenttypes',  # Required for Django's content framework
    # 'django.contrib.sessions',  # Not needed without auth
    # 'django.contrib.messages',  # Not needed without admin
    'django.contrib.staticfiles',
    'corsheaders',
    'home',
    'menu'
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    # 'django.contrib.sessions.middleware.SessionMiddleware',  # Not needed without auth
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',  # Keep for API security
    # 'django.contrib.auth.middleware.AuthenticationMiddleware',  # Not needed
    # 'django.contrib.messages.middleware.MessageMiddleware',  # Not needed
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
]

# CORS settings - Allow frontend to access API
CORS_ALLOW_ALL_ORIGINS = True  # Set to True for development, can restrict in production
# CORS_ALLOWED_ORIGINS = env.list('CORS_ALLOWED_ORIGINS', default=[])

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                # 'django.contrib.auth.context_processors.auth',  # Not needed
                # 'django.contrib.messages.context_processors.messages',  # Not needed
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'

# Database - Minimal config for Django (not actually used - all data is static)
# Using a file-based SQLite database so migrations persist between server restarts
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),  # File-based database - never actually used for data
    }
}

# Password validation - REMOVED: No authentication needed for frontend showcase
# AUTH_PASSWORD_VALIDATORS = []

# Internationalization
# https://docs.djangoproject.com/en/2.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# API KEYS
GOOGLE_MAPS_API_KEY = env('GOOGLE_MAPS_API_KEY')
INSTAGRAM_API_KEY = env('INSTAGRAM_API_KEY')

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.0/howto/static-files/

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

STATIC_URL = '/static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'build/static'),
    os.path.join(BASE_DIR, 'static'),  # Add this for static PDFs and images
]
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# AWS S3 Bucket - REMOVED: Using static files instead
# Media settings - using local static files only
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')