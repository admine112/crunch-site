/**
 * WordPress API Integration
 * Получение данных из WordPress для существующего Next.js сайта
 */

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'http://localhost:8001/wp-json';

export interface WPEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

export interface WPPastor {
  id: number;
  name: string;
  role: string;
  bio: string;
  email: string;
  phone: string;
  image: string;
  joined_year: number;
}

/**
 * Получить события из WordPress
 */
export async function getEventsFromWP(): Promise<WPEvent[]> {
  try {
    const res = await fetch(`${WP_API_URL}/church/v1/events`, {
      next: { revalidate: 60 } // Кеш на 60 секунд
    });
    
    if (!res.ok) {
      console.warn('WordPress API недоступен, используем локальные данные');
      return [];
    }
    
    return await res.json();
  } catch (error) {
    console.warn('Ошибка подключения к WordPress:', error);
    return [];
  }
}

/**
 * Получить пасторов из WordPress
 */
export async function getPastorsFromWP(): Promise<WPPastor[]> {
  try {
    const res = await fetch(`${WP_API_URL}/church/v1/pastors`, {
      next: { revalidate: 60 }
    });
    
    if (!res.ok) {
      console.warn('WordPress API недоступен, используем локальные данные');
      return [];
    }
    
    return await res.json();
  } catch (error) {
    console.warn('Ошибка подключения к WordPress:', error);
    return [];
  }
}

/**
 * Получить посты из WordPress
 */
export async function getPostsFromWP() {
  try {
    const res = await fetch(`${WP_API_URL}/wp/v2/posts`, {
      next: { revalidate: 60 }
    });
    
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.warn('Ошибка подключения к WordPress:', error);
    return [];
  }
}

/**
 * Получить страницы из WordPress
 */
export async function getPagesFromWP() {
  try {
    const res = await fetch(`${WP_API_URL}/wp/v2/pages`, {
      next: { revalidate: 60 }
    });
    
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.warn('Ошибка подключения к WordPress:', error);
    return [];
  }
}
