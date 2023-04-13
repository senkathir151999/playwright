import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://devuserkeydemands.underdev.in/');
  await page.locator('input[name="broker"]').check();
  await page.getByPlaceholder('Enter your Email ID / Phone Number').click();
  await page.getByPlaceholder('Enter your Email ID / Phone Number').fill('senkathir.m@siamcomputing.com');
  await page.getByRole('button', { name: 'Send OTP' }).click();
  await page.getByRole('textbox', { name: 'Please enter verification code. Character 1' }).click();
  await page.getByRole('textbox', { name: 'Please enter verification code. Character 1' }).fill('6');
  await page.getByRole('textbox', { name: 'Character 2' }).fill('6');
  await page.getByRole('textbox', { name: 'Character 3' }).fill('0');
  await page.getByRole('textbox', { name: 'Character 4' }).fill('5');
  await page.getByRole('dialog').getByRole('button', { name: 'Login', exact: true }).click();
  await page.getByText('Profile Details').click();
  await page.getByRole('button', { name: 'Update Changes' }).click();
  await page.getByText('Subscription').nth(1).click();
  await page.getByText('Logout').first().click();
});