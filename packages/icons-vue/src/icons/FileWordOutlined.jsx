// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FileWordOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FileWordOutlined';

export default {
  name: 'IconFileWordOutlined',
  displayName: 'FileWordOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileWordOutlinedSvg } },
      children,
    ),
};