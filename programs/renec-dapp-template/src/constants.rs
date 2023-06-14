use anchor_lang::prelude::Pubkey;

pub const DISCRIMINATOR_SIZE: usize = std::mem::size_of::<u64>();
pub const PUBKEY_SIZE: usize = std::mem::size_of::<Pubkey>();
pub const U8_SIZE: usize = std::mem::size_of::<u8>();
pub const U32_SIZE: usize = std::mem::size_of::<u32>();
pub const U64_SIZE: usize = std::mem::size_of::<u64>();
pub const U128_SIZE: usize = std::mem::size_of::<u128>();
pub const I64_SIZE: usize = std::mem::size_of::<i64>();
pub const BOOL_SIZE: usize = std::mem::size_of::<bool>();
pub const VECTOR_OVERHEAD_SIZE: usize = 8;
pub const STRING_PREFIX_SIZE: usize = 4;
