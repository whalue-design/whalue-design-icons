// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FileImageOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FileImageOutlined';

export default {
  name: 'IconFileImageOutlined',
  displayName: 'FileImageOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileImageOutlinedSvg } },
      children,
    ),
};