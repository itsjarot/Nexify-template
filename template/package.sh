#!/bin/bash
# ============================================================
# Nexify — Packaging Script
# ============================================================
# Membuat file ZIP untuk upload ke Gumroad.
# Usage: bash package.sh
# Output: nexify-saas-v1.0.0.zip
# ============================================================

set -e

# --- Fungsi cleanup (dipanggil otomatis saat exit/error) ---
cleanup() {
  if [ -d "$TEMP_DIR" ] && [ "$TEMP_DIR" != "." ] && [ "$TEMP_DIR" != "/" ]; then
    rm -rf "$TEMP_DIR" 2>/dev/null
  fi
}
trap cleanup EXIT

# --- Konfigurasi ---
VERSION="v1.0.0"
SOURCE_DIR="SaaS"                           # Nama folder source
TEMP_DIR="nexify"                            # Nama folder temporary
OUTPUT_FILE="nexify-saas-${VERSION}.zip"     # Nama file ZIP output

# --- 1. Dapatkan direktori script ---
# Ini memastikan script bisa dijalankan dari direktori manapun
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# --- 2. Hapus ZIP lama jika ada ---
if [ -f "$OUTPUT_FILE" ]; then
  echo "🗑️  Menghapus file ZIP lama: $OUTPUT_FILE"
  rm "$OUTPUT_FILE"
fi

# --- 3. Copy folder source ke folder temporary ---
echo "📦 Menyalin $SOURCE_DIR/ ke $TEMP_DIR/ ..."
cp -r "$SOURCE_DIR" "$TEMP_DIR"

# --- 4. Hapus file yang tidak perlu ikut ---
echo "🧹 Membersihkan file yang tidak diperlukan..."

# File/folder yang akan dihapus dari dalam folder temporary
EXCLUDE_LIST=(
  ".gitkeep"
  ".DS_Store"
  ".git"
  "Thumbs.db"
  ".gitignore"
)

for item in "${EXCLUDE_LIST[@]}"; do
  find "$TEMP_DIR" -name "$item" -type f -o -name "$item" -type d 2>/dev/null | while read -r f; do
    rm -rf "$f"
    echo "   ✕ Hapus: $f"
  done
done

# --- 5. Buat file ZIP ---
echo "📦 Membuat file ZIP: $OUTPUT_FILE ..."
zip -r "$OUTPUT_FILE" "$TEMP_DIR" -q

# --- 6. Hapus folder temporary ---
echo "🧹 Membersihkan folder temporary..."
rm -rf "$TEMP_DIR"

# --- 7. Selesai ---
# Ambil ukuran file ZIP
if [[ "$(uname)" == "Darwin" ]]; then
  # macOS: gunakan stat dengan format berbeda
  SIZE=$(stat -f "%z" "$OUTPUT_FILE" 2>/dev/null | awk '{printf "%.1f", $1/1048576}')
else
  # Linux
  SIZE=$(stat -c "%s" "$OUTPUT_FILE" 2>/dev/null | awk '{printf "%.1f", $1/1048576}')
fi

echo ""
echo "✅  Selesai!"
echo "   File: $OUTPUT_FILE"
echo "   Ukuran: ${SIZE}MB"
echo "   Lokasi: $SCRIPT_DIR/$OUTPUT_FILE"
echo ""
