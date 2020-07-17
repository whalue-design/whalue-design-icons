// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FileGifOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FileGifOutlined';

export default {
  name: 'IconFileGifOutlined',
  displayName: 'FileGifOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileGifOutlinedSvg } },
      children,
    ),
};