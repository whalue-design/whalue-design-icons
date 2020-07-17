// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FileOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FileOutlined';

export default {
  name: 'IconFileOutlined',
  displayName: 'FileOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileOutlinedSvg } },
      children,
    ),
};