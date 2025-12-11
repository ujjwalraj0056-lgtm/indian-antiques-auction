# 🚀 RANSUS ANTIQUE - ABHI DEPLOY KARO!

## ⚡ 5 MINUTE DEPLOYMENT GUIDE

---

## STEP 1: VERCEL PE JAO

**Link**: https://vercel.com/signup

- GitHub se login karo
- "Continue with GitHub" click karo
- Authorize karo

---

## STEP 2: NEW PROJECT BANAO

1. **Dashboard pe jao**: https://vercel.com/new

2. **"Import Git Repository" section mein**:
   - Search karo: `ransus-antique`
   - Ya direct link: https://vercel.com/new/clone?repository-url=https://github.com/ujjwalraj0056-lgtm/ransus-antique

3. **"Import" button click karo**

---

## STEP 3: ENVIRONMENT VARIABLES ADD KARO

**Important**: Deployment se pehle ye zaruri hai!

### Kaise Add Karein:
1. "Environment Variables" section mein jao
2. Neeche diye gaye variables ek-ek karke add karo:

```
Name: MONGODB_URI
Value: (neeche dekho kaise banaye)

Name: JWT_SECRET  
Value: (neeche dekho kaise banaye)

Name: RAZORPAY_KEY_ID
Value: (neeche dekho kaise banaye)

Name: RAZORPAY_KEY_SECRET
Value: (neeche dekho kaise banaye)

Name: CLOUDINARY_CLOUD_NAME
Value: (neeche dekho kaise banaye)

Name: CLOUDINARY_API_KEY
Value: (neeche dekho kaise banaye)

Name: CLOUDINARY_API_SECRET
Value: (neeche dekho kaise banaye)
```

---

## 📝 ENVIRONMENT VARIABLES KAISE BANAYE

### 1️⃣ MONGODB_URI (Database)

**FREE Setup - 2 minutes**:

1. Jao: https://www.mongodb.com/cloud/atlas/register
2. "Sign Up" karo (Google se bhi kar sakte ho)
3. "Create a Free Cluster" click karo
4. Cluster name: `ransus-cluster`
5. "Create Cluster" click karo (2-3 min lagega)
6. Left sidebar mein "Database Access" pe jao
7. "Add New Database User" click karo:
   - Username: `ransusadmin`
   - Password: Auto-generate karo (SAVE THIS!)
   - Click "Add User"
8. Left sidebar mein "Network Access" pe jao
9. "Add IP Address" click karo
10. "Allow Access from Anywhere" select karo (0.0.0.0/0)
11. "Confirm" click karo
12. "Database" pe wapas jao
13. "Connect" button click karo
14. "Connect your application" select karo
15. Connection string copy karo:
    ```
    mongodb+srv://ransusadmin:<password>@ransus-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
    ```
16. `<password>` ko apne actual password se replace karo
17. Ye string `MONGODB_URI` mein paste karo Vercel pe

---

### 2️⃣ JWT_SECRET (Security Key)

**Kaise Banaye**:

**Option A - Online Tool**:
1. Jao: https://www.random.org/strings/
2. Generate karo 32 character random string
3. Copy karo aur `JWT_SECRET` mein paste karo

**Option B - Terminal** (agar Node.js installed hai):
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

**Option C - Simple Random**:
Koi bhi 32+ character ka random string use karo:
```
ransus_antique_super_secret_key_2025_india
```

---

### 3️⃣ RAZORPAY (Payment Gateway)

**FREE Test Account - 3 minutes**:

1. Jao: https://dashboard.razorpay.com/signup
2. Sign up karo (phone number chahiye)
3. OTP verify karo
4. Dashboard pe jao: https://dashboard.razorpay.com
5. Left sidebar mein "Settings" → "API Keys" pe jao
6. "Test Mode" ON karo (toggle switch)
7. "Generate Test Key" click karo
8. **Key ID** copy karo → `RAZORPAY_KEY_ID` mein paste karo
9. **Key Secret** copy karo → `RAZORPAY_KEY_SECRET` mein paste karo

**Note**: Test mode mein real payment nahi hoga, sirf testing ke liye hai!

---

### 4️⃣ CLOUDINARY (Image Upload)

**FREE Account - 2 minutes**:

1. Jao: https://cloudinary.com/users/register/free
2. Sign up karo (email se)
3. Email verify karo
4. Dashboard pe jao: https://console.cloudinary.com
5. "Dashboard" pe ye milega:
   - **Cloud Name** → `CLOUDINARY_CLOUD_NAME` mein paste karo
   - **API Key** → `CLOUDINARY_API_KEY` mein paste karo
   - **API Secret** → `CLOUDINARY_API_SECRET` mein paste karo

---

## STEP 4: DEPLOY KARO! 🚀

1. Sab environment variables add karne ke baad
2. **"Deploy" button click karo**
3. 2-3 minutes wait karo
4. **DONE!** ✅

---

## 🎉 AAPKA WEBSITE LIVE HAI!

**URL**: `https://ransus-antique.vercel.app`

Ya jo bhi Vercel ne diya ho!

---

## ✅ CHECKLIST

Deployment ke baad ye check karo:

- [ ] Website khul raha hai?
- [ ] Homepage dikh raha hai "Ransus Antique"?
- [ ] Products page accessible hai?
- [ ] Auctions page accessible hai?

---

## 🔧 AGAR ERROR AAE TO:

### Error: "Build Failed"
- Environment variables check karo
- Sab variables add kiye hai?

### Error: "Database Connection Failed"
- MongoDB URI check karo
- Password correct hai?
- IP whitelist kiya hai (0.0.0.0/0)?

### Error: "Payment Failed"
- Razorpay test mode ON hai?
- API keys correct hai?

---

## 📱 NEXT STEPS

1. ✅ Test karo website ko
2. ✅ Sample products add karo (API se)
3. ✅ Payment test karo (Razorpay test cards use karo)
4. ✅ Custom domain add karo (optional)
5. ✅ Launch karo! 🎊

---

## 🆘 HELP CHAHIYE?

**Common Issues**:

1. **MongoDB not connecting**: 
   - IP whitelist check karo
   - Password mein special characters hai to URL encode karo

2. **Vercel deployment failing**:
   - Build logs check karo
   - Environment variables verify karo

3. **Payment not working**:
   - Test mode ON hai Razorpay mein?
   - Test cards use kar rahe ho?

---

## 🎯 RAZORPAY TEST CARDS

Testing ke liye ye cards use karo:

**Success Card**:
```
Card Number: 4111 1111 1111 1111
CVV: Any 3 digits
Expiry: Any future date
```

**Failed Card**:
```
Card Number: 4000 0000 0000 0002
```

---

## 🌐 CUSTOM DOMAIN ADD KARO (OPTIONAL)

1. Vercel dashboard mein project pe jao
2. "Settings" → "Domains" pe jao
3. Apna domain add karo
4. DNS settings update karo (Vercel guide dega)

---

**AB DEPLOY KARO AUR LAUNCH KARO! 🚀**

Koi problem ho to batao, main help karunga! 💪