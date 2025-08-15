import { test, expect } from '@playwright/test';

/**
 * Navigation Tests - Testing React Router functionality
 * This is like testing Flask routes, but in the browser
 */

test.describe('Navigation', () => {
  test('should navigate to configuration page by default', async ({ page }) => {
    // Go to the homepage
    await page.goto('/');
    
    // Should redirect to /config
    await expect(page).toHaveURL('/config');
    
    // Should show configuration page content
    await expect(page.locator('h1')).toContainText('AI Model Configuration');
  });

  test('should navigate between all pages using navigation links', async ({ page }) => {
    await page.goto('/');
    
    // Start at Configuration page
    await expect(page.locator('h1')).toContainText('AI Model Configuration');
    
    // Click on Prompts link
    await page.click('a[href="/prompts"]');
    await expect(page).toHaveURL('/prompts');
    await expect(page.locator('h1')).toContainText('Prompt Engineering');
    
    // Click on Results link
    await page.click('a[href="/results"]');
    await expect(page).toHaveURL('/results');
    await expect(page.locator('h1')).toContainText('Experiment Results');
    
    // Click back to Configuration
    await page.click('a[href="/config"]');
    await expect(page).toHaveURL('/config');
    await expect(page.locator('h1')).toContainText('AI Model Configuration');
  });

  test('should handle direct URL navigation', async ({ page }) => {
    // Navigate directly to prompts page
    await page.goto('/prompts');
    await expect(page.locator('h1')).toContainText('Prompt Engineering');
    
    // Navigate directly to results page
    await page.goto('/results');
    await expect(page.locator('h1')).toContainText('Experiment Results');
    
    // Navigate directly to config page
    await page.goto('/config');
    await expect(page.locator('h1')).toContainText('AI Model Configuration');
  });

  test('should show navigation bar on all pages', async ({ page }) => {
    const pages = ['/config', '/prompts', '/results'];
    
    for (const pagePath of pages) {
      await page.goto(pagePath);
      
      // Check navigation bar exists
      await expect(page.locator('nav')).toBeVisible();
      
      // Check all navigation links exist
      await expect(page.locator('a[href="/config"]')).toBeVisible();
      await expect(page.locator('a[href="/prompts"]')).toBeVisible();
      await expect(page.locator('a[href="/results"]')).toBeVisible();
    }
  });
});