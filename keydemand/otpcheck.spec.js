import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://devuserkeydemands.underdev.in/');
  await page.getByRole('button', { name: 'Login' }).getByRole('button', { name: 'Login', exact: true }).filter({ hasText: 'Login' }).click();
  await page.getByPlaceholder('Enter your Email ID / Phone Number').click();
  await page.locator('input[name="broker"]').check();
  await page.getByRole('radio').nth(1).check();
  await page.getByPlaceholder('Enter your Email ID / Phone Number').click();
  await page.getByPlaceholder('Enter your Email ID / Phone Number').fill('arun@yopmail.com');
  await page.getByRole('button', { name: 'Send OTP' }).click();
});