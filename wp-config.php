<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'cayxanh' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '9i/N{wJA61P4Rkd<s5jPN0CnA[MvqSBp{9:Y7~r&mF37XI3}XCLxZcAtFP& {Q@.' );
define( 'SECURE_AUTH_KEY',  'McJvD=`2UGm}?ccb/];B[5)e:#teG2ucZu}gB#KE){-]qQjx 0?%l@e&$0oB>P|1' );
define( 'LOGGED_IN_KEY',    'yLo!c][%USWT5g49S,zFY>g})rZn_a4wRncSdf-TNoXLhbN!x}-qL:3$JRZ[/=1v' );
define( 'NONCE_KEY',        'tkmq($QL3EK5aItg^M,SnsM_x#OiO4uD3~RWX~Vww%cM1AQw/Wlt-MHBkPPxmI>3' );
define( 'AUTH_SALT',        'lz8ZtI4JY3{bji@2C XGwmG}|G+=;yD{-ohV}p/HRr%Lk+|<yw,LNEk2oIZ^qy,i' );
define( 'SECURE_AUTH_SALT', '9xGr#by5GvGkSU2>T[Q</IIHnWgV0Lm_Z.6TE)55c,:m6h#~YO/-g$1hE%4gMR#0' );
define( 'LOGGED_IN_SALT',   'rwx}v2SMy/d=Qz<?$c<{Fpj%q8!r9!zsYKnW|nNDzY`vr$fG8q7Ip@zQ6)4+3n:!' );
define( 'NONCE_SALT',       '2PJ-oaWxN_lBy#)mT)xO_l)-U&u@vE+(MLl{S/Vhrj9IU3uh`vW/Y8e--gZ-zVvr' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
