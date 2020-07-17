// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FileTextOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FileTextOutlined';

export default {
  name: 'IconFileTextOutlined',
  displayName: 'FileTextOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileTextOutlinedSvg } },
      children,
    ),
};